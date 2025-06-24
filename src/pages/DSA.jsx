import React, { useState, useEffect } from "react";
import dsaTopics from "../data/dsa.js";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";

const DSA = () => {
  const [selectedTopic, setSelectedTopic] = useState(dsaTopics[0]);
  const [selectedLang, setSelectedLang] = useState("python");
  const [code, setCode] = useState(selectedTopic.example.code["python"]);
  const [output, setOutput] = useState("");
  const [search, setSearch] = useState("");
  const [completedTopics, setCompletedTopics] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTopics")) || [];
  });

  useEffect(() => {
    localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
  }, [completedTopics]);

  const getLangExtension = () => {
    switch (selectedLang) {
      case "javascript": return javascript();
      case "java": return java();
      case "python":
      default: return python();
    }
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setCode(topic.example.code[selectedLang]);
    setOutput("");
  };

  const handleLangChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    setCode(selectedTopic.example.code[lang]);
    setOutput("");
  };

  const runCode = async () => {
  const runtimes = {
    python: { language: "python", version: "3.10.0" },
    javascript: { language: "javascript", version: "18.15.0" },
    java: { language: "java", version: "15.0.2" },
  };

  const { language, version } = runtimes[selectedLang];

  const payload = {
    language,
    version,
    files: [{ name: "main", content: code }],
  };

  try {
    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    const result =
      data.run?.output || data.output || data.message || "No output";

    setOutput(result);
  } catch (error) {
    setOutput("❌ Error running code.");
    console.error(error);
  }
};


  const resetCode = () => {
    setCode(selectedTopic.example.code[selectedLang]);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTopic.title}.${selectedLang}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleComplete = (topicId) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
    );
  };

  const filteredTopics = dsaTopics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalTopics = dsaTopics.length;
  const completedCount = completedTopics.length;
  const progressPercent = Math.floor((completedCount / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-3xl font-bold text-white mb-2 sm:mb-0 pl-10">DSA Topics</h1>
        <input
          type="text"
          placeholder="🔍 Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          🚀 Progress: {completedCount} / {totalTopics} topics completed
        </p>
        <div className="h-2 mt-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-1/4 max-h-[80vh] overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className={`p-3 rounded-lg cursor-pointer border hover:shadow-md transition-all ${
                selectedTopic.id === topic.id
                  ? "bg-blue-500 border-blue-400 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTopicClick(topic)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  {topic.title}
                </h3>
                <input
                  type="checkbox"
                  checked={completedTopics.includes(topic.id)}
                  onChange={() => toggleComplete(topic.id)}
                  className="accent-green-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{topic.difficulty}</p>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1  width-100%">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedTopic.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedTopic.concept}</p>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-md font-semibold mb-2 text-blue-600">💡 Example :</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-2">
              {selectedTopic.example.description}
            </p>

            {selectedTopic.example.input && (
              <div className="bg-gray-50 dark:bg-gray-700 p-2 text-xs rounded text-gray-700 dark:text-gray-300 mb-2">
                <strong>Input:</strong> {selectedTopic.example.input}
              </div>
            )}

            {selectedTopic.example.expectedOutput && (
              <div className="bg-gray-50 dark:bg-gray-700 p-2 text-xs rounded text-gray-700 dark:text-gray-300">
                <strong>Expected Output:</strong> {selectedTopic.example.expectedOutput}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <label className="text-gray-800 dark:text-gray-300 text-sm font-medium">
              Choose Language:
            </label>
            <select
              value={selectedLang}
              onChange={handleLangChange}
              className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
            </select>
            <button
              onClick={runCode}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded shadow"
            >
              ▶️ Run
            </button>
            <button
              onClick={resetCode}
              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
            >
              Reset
            </button>
            <button
              onClick={downloadCode}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
              ⬇️ Download
            </button>
          </div>

          <CodeMirror
            value={code}
            height="250px"
            extensions={[getLangExtension()]}
            onChange={(val) => setCode(val)}
            theme="dark"
            className="rounded border"
          />

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1">🔽 Output:</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-gray-800 dark:text-green-400">
              {output}
            </pre>
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default DSA;
