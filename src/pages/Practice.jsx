import React, { useState, useEffect, useCallback } from "react";
import problems from "../data/problems";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";


const Practice = () => {
  // === States ===
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [solvedProblems, setSolvedProblems] = useState(() => {
    return JSON.parse(localStorage.getItem("solvedProblems") || "[]");
  });
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  // === Effects ===
  useEffect(() => {
    // On mount set default problem & expanded topic
    const firstTopic = problems[0];
    const firstProblem = firstTopic.problems[0];
    setExpandedTopic(firstTopic.topic);
    setSelectedProblem(firstProblem);
    setCode(firstProblem.starterCode[language]);
    setShowHint(false);
    setShowSolution(false);
    resetTimer();
  }, []);

  useEffect(() => {
    if (selectedProblem) {
      setCode(selectedProblem.starterCode[language]);
      setShowHint(false);
      setShowSolution(false);
      resetTimer();
    }
  }, [selectedProblem, language]);

  useEffect(() => {
    // Save solved problems in localStorage
    localStorage.setItem("solvedProblems", JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  useEffect(() => {
    // Save dark mode preference
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // === Handlers ===

  const handleTopicClick = (topic) => {
    setExpandedTopic(expandedTopic === topic.topic ? null : topic.topic);
  };

  const handleProblemClick = (problem) => {
    setSelectedProblem(problem);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const languageVersions = {
  python: "3.10.0",
  javascript: "18.15.0",
  java: "15.0.2",
};


  const handleRun = async () => {
  if (!selectedProblem) return;
  setIsRunning(true);
  setOutput("Running...");

  const version = languageVersions[language] || "latest";

  const payload = {
    language,
    version,
    files: [{ name: "Main", content: code }],
    stdin: "",
  };

  try {
    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    const out = data.run?.output || data.output || "No output";
    setOutput(out);
  } catch (err) {
    setOutput("❌ Error running code.");
  } finally {
    setIsRunning(false);
  }
};




const handleSubmit = () => {
  if (!selectedProblem) return;

  if (solvedProblems.includes(selectedProblem.id)) {
    alert("❗Already solved this problem!");
    return;
  }

  alert("✅ Problem marked as solved!");

  // Update local solvedProblems list
  const updatedSolved = [...solvedProblems, selectedProblem.id];
  setSolvedProblems(updatedSolved);
  localStorage.setItem("solvedProblems", JSON.stringify(updatedSolved));

  // Update userStats
  const today = new Date().toISOString().split("T")[0];
  let rawStats = localStorage.getItem("userStats");
  let userStats = {};

  try {
    userStats = rawStats ? JSON.parse(rawStats) : {};
  } catch {
    userStats = {};
  }

  if (!Array.isArray(userStats[today])) {
    userStats[today] = [];
  }

  userStats[today].push(new Date().toISOString());
  localStorage.setItem("userStats", JSON.stringify(userStats));

  // Trigger profile update if needed
  window.dispatchEvent(new Event("storage"));
};


  const resetTimer = () => {
    setTimer(300); // 5 minutes default
    setIsTimerActive(false);
  };

  const toggleTimer = () => {
    if (timer === 0) resetTimer();
    setIsTimerActive(!isTimerActive);
  };

  const filteredProblems = problems
    .map((topic) => ({
      ...topic,
      problems: topic.problems.filter((p) => {
        const matchesSearch =
          p.title.toLowerCase().includes(search.toLowerCase());
        const matchesDifficulty =
          difficultyFilter === "All" || p.difficulty === difficultyFilter;
        return matchesSearch && matchesDifficulty;
      }),
    }))
    .filter((topic) => topic.problems.length > 0);

  const totalProblems = problems.reduce(
    (acc, topic) => acc + topic.problems.length,
    0
  );
  const solvedCount = solvedProblems.length;
  const progressPercent = Math.floor((solvedCount / totalProblems) * 100);

  // Keyboard shortcut: Ctrl + Enter to Run
  const handleKeyDown = useCallback(
    (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (!isRunning) handleRun();
      }
    },
    [isRunning, code, language]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  

  // Theme selection for CodeMirror
  const dracula = draculaInit(); // ✅ Proper initialization
  const cmTheme = darkMode ? dracula : githubLight;

  // Utility for formatting timer
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Copy output to clipboard
  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    alert("Output copied to clipboard!");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} min-h-screen flex flex-col md:flex-row pt-20`}>
      {/* Sidebar */}
      <aside className="md:w-1/3 lg:w-1/4 bg-white dark:bg-gray-800 p-4 shadow h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400">
            DSA Topics
          </h2>
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="text-sm px-3 py-1 rounded border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <input
          type="search"
          placeholder="🔍 Search problems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          className="w-full mb-4 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          aria-label="Filter by difficulty"
        >
          <option value="All">All difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <div className="mb-4">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-center text-sm mt-1">
            {solvedCount} / {totalProblems} solved ({progressPercent}%)
          </p>
        </div>

        <ul>
          {filteredProblems.map((topic) => (
            <li key={topic.topic} className="mb-3">
              <button
                onClick={() => handleTopicClick(topic)}
                className={`w-full text-left px-3 py-2 rounded-md font-semibold ${
                  expandedTopic === topic.topic
                    ? "bg-blue-100 text-white dark:bg-blue-900 dark:text-white"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                } hover:bg-blue-50 dark:hover:bg-blue-800 transition`}
                aria-expanded={expandedTopic === topic.topic}
              >
                {topic.topic}
              </button>
              {expandedTopic === topic.topic && (
                <ul className="mt-2 ml-4 space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
                  {topic.problems.map((prob) => {
                    const isSolved = solvedProblems.includes(prob.id);
                    return (
                      <li
                        key={prob.id}
                        onClick={() => handleProblemClick(prob)}
                        className={`cursor-pointer px-3 py-2 rounded-md border flex justify-between items-center ${
                          selectedProblem?.id === prob.id
                            ? "bg-blue-50 border-blue-400 dark:bg-blue-900 dark:border-blue-600 text-white"
                            : "bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 text-gray-400 "
                        } hover:bg-gray-100 dark:hover:bg-gray-700 transition`}
                        tabIndex={0}
                        role="button"
                        aria-pressed={selectedProblem?.id === prob.id}
                      >
                        <span className="font-medium">{prob.title}</span>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full select-none ${
                              prob.difficulty === "Easy"
                                ? "bg-green-100 text-green-700"
                                : prob.difficulty === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {prob.difficulty}
                          </span>
                          {isSolved && (
                            <svg
                              className="w-5 h-5 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                              aria-label="Solved"
                              title="Solved"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 p-6 overflow-y-auto ${
          darkMode ? "bg-gray-900" : "bg-white"
        } rounded-l-lg shadow-lg`}
      >
        {selectedProblem ? (
          <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-500">
                {selectedProblem.title}
              </h3>
              <button
                onClick={toggleTimer}
                className={`mt-3 md:mt-0 px-4 py-2 rounded shadow font-semibold transition ${
                  isTimerActive
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
                aria-pressed={isTimerActive}
                aria-label="Toggle Timer"
              >
                {isTimerActive ? "Stop Timer" : "Start 5 min Timer"}{" "}
                {isTimerActive && <span className="ml-2 font-mono">{formatTime(timer)}</span>}
              </button>
            </div>

            <p className="mb-4 text-gray-800 dark:text-gray-900 whitespace-pre-line">
              {selectedProblem.description}
            </p>

            {selectedProblem.example && (
              <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700">
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Example:</h4>
                <pre className="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                  {selectedProblem.example}
                </pre>
              </section>
            )}

            {/* Hint & Solution toggles */}
            <div className="mb-4 flex space-x-4">
              {selectedProblem.hint && (
                <button
                  onClick={() => setShowHint((h) => !h)}
                  className="bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-yellow-900 dark:text-yellow-100 px-3 py-1 rounded font-semibold transition"
                  aria-pressed={showHint}
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>
              )}
              {selectedProblem.solution && (
                <button
                  onClick={() => setShowSolution((s) => !s)}
                  className="bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white px-3 py-1 rounded font-semibold transition"
                  aria-pressed={showSolution}
                >
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </button>
              )}
            </div>

            {showHint && selectedProblem.hint && (
              <section className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded border border-yellow-400 dark:border-yellow-600 text-yellow-900 dark:text-yellow-100 whitespace-pre-wrap">
                {selectedProblem.hint}
              </section>
            )}

            {showSolution && selectedProblem.solution && (
              <section className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900 rounded border border-indigo-400 dark:border-indigo-600 text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">
                {selectedProblem.solution}
              </section>
            )}

            <div className="mb-4">
              <label htmlFor="language" className="font-semibold mr-3">
                Language:
              </label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="border px-3 py-1 rounded-md shadow-sm"
                aria-label="Select programming language"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>

            <CodeMirror
              value={code}
              height="350px"
              theme={cmTheme}
              extensions={[
                language === "javascript"
                  ? javascript()
                  : language === "python"
                  ? python()
                  : java(),
              ]}
              onChange={(val) => setCode(val)}
              aria-label="Code editor"
              className="rounded border border-gray-300 dark:border-gray-700 shadow-sm"
            />

            <div className="mt-4">
  <h4 className="font-semibold text-gray-700 mb-2">🔽 Output:</h4>
  <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 whitespace-pre-wrap">
    {isRunning ? "Running..." : output}
  </pre>
</div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-2 rounded font-semibold text-white transition ${
                  isRunning ? "bg-blue-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"
                }`}
                aria-live="polite"
                aria-busy={isRunning}
              >
                ▶️ {isRunning ? "Running..." : "Run Code"}
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold transition"
              >
                ✅ Mark as Solved
              </button>
              <button
                onClick={() => {
                  setCode(selectedProblem.starterCode[language]);
                  setOutput("");
                }}
                className="bg-gray-700 hover:bg-gray-900 text-white px-5 py-2 rounded font-semibold transition"
              >
                🔄 Reset Code
              </button>
              <button
                onClick={copyOutput}
                disabled={!output}
                className="bg-yellow-600 hover:bg-yellow-800 text-white px-5 py-2 rounded font-semibold transition"
                title="Copy output to clipboard"
              >
                📋 Copy Output
              </button>
            </div>

            
          </>
        ) : (
          <p>Select a problem to start coding!</p>
        )}
      </main>
    </div>
  );
};

export default Practice;
