// ✅ Final EditorPage.jsx with Complete Fullscreen: Editor + Output + Controls
import { useState } from "react";
import Editor from "@monaco-editor/react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/themes/prism-tomorrow.css";

const EditorPage = () => {
  const [language, setLanguage] = useState("web");
  const [html, setHtml] = useState("<h1>Welcome to NextEra!</h1>");
  const [css, setCss] = useState("h1 { color: blue; text-align: center; }");
  const [js, setJs] = useState("console.log('NextEra Web Editor');");
  const [code, setCode] = useState("print('Hello from Python')");
  const [output, setOutput] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [running, setRunning] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const runCode = async () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 800);
    if (language === "web") {
      setOutput(
        `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>try { ${js} } catch (e) {document.body.innerHTML += '<pre style=\"color:red;\">'+e+'</pre>';}</script></body></html>`
      );
    } else {
      const runtimes = {
        python: { language: "python", version: "3.10.0" },
        java: { language: "java", version: "15.0.2" },
      };
      const { language: langName, version } = runtimes[language];
      const payload = {
        language: langName,
        version,
        files: [{ name: "main", content: code }],
      };
      try {
        const res = await fetch("https://emkc.org/api/v2/piston/execute", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const json = await res.json();
        const out = json.output || (json.run && json.run.output) || json.message || "No output";
        setOutput(out);
      } catch {
        setOutput("❌ Error: Could not run code.");
      }
    }
  };

  const downloadCode = () => {
    const b = new Blob([
      language === "web"
        ? `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}\n\n// JS\n${js}`
        : code,
    ], {
      type: "text/plain",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(b);
    a.download = `SlideCode_${language}.${language === "java" ? "java" : language === "python" ? "py" : "txt"}`;
    a.click();
  };

  const copyToClipboard = () => {
    const text = language === "web" ? `${html}\n${css}\n${js}` : code;
    navigator.clipboard.writeText(text);
    alert("✅ Code copied!");
  };

  const shareLink = () => {
    const shareText = encodeURIComponent("Check my code:\n" + (language === "web" ? html + css + js : code));
    const link = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(link, "_blank");
  };

  const renderEditor = () => {
    return (
      <div className="relative h-full">
        <div className="space-y-4 p-2 h-full overflow-auto">
          {language === "web" ? (
            <>
              <div>
                <label className="font-semibold">📄 HTML</label>
                <Editor
                  height="25vh"
                  defaultLanguage="html"
                  theme={darkMode ? "vs-dark" : "light"}
                  value={html}
                  options={{ fontSize: 14, minimap: { enabled: false }, wordWrap: "on" }}
                  onChange={(v) => setHtml(v || "")}
                />
              </div>
              <div>
                <label className="font-semibold">🎨 CSS</label>
                <Editor
                  height="25vh"
                  defaultLanguage="css"
                  theme={darkMode ? "vs-dark" : "light"}
                  value={css}
                  options={{ fontSize: 14, minimap: { enabled: false }, wordWrap: "on" }}
                  onChange={(v) => setCss(v || "")}
                />
              </div>
              <div>
                <label className="font-semibold">⚙️ JavaScript</label>
                <Editor
                  height="25vh"
                  defaultLanguage="javascript"
                  theme={darkMode ? "vs-dark" : "light"}
                  value={js}
                  options={{ fontSize: 14, minimap: { enabled: false }, wordWrap: "on" }}
                  onChange={(v) => setJs(v || "")}
                />
              </div>
            </>
          ) : (
            <Editor
              theme={darkMode ? "vs-dark" : "light"}
              language={language}
              value={code}
              height="85vh"
              options={{ wordWrap: "on", minimap: { enabled: false }, fontSize: 14 }}
              onChange={(v) => setCode(v || "")}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col min-h-screen ${isFullScreen ? "fixed top-0 left-0 w-full h-full z-[9999] bg-black" : darkMode ? "bg-[#1e1e1e] text-white" : "bg-white text-gray-900"}`}>
      <div className="flex flex-wrap justify-between items-center gap-2 p-4 bg-gray-800 dark:bg-gray-700 z-50">
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              if (e.target.value === "python") {
                setCode("print('Hello from Python')");
              }
              if (e.target.value === "java") {
                setCode(`public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello from Java\");\n  }\n}`);
              }
            }}
            className="p-2 rounded bg-gray-700 text-white font-semibold"
          >
            <option value="web">🌐 Web</option>
            <option value="python">🐍 Python</option>
            <option value="java">☕ Java</option>
          </select>
          <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-1 rounded bg-gray-700 text-white">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button onClick={() => setIsFullScreen(!isFullScreen)} className="px-3 py-1 rounded bg-yellow-600 text-white">
            {isFullScreen ? "❌ Exit Fullscreen" : "🖥️ Fullscreen"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={runCode} className="px-3 py-1 bg-blue-600 text-white rounded">▶ Run</button>
          <button onClick={downloadCode} className="px-3 py-1 bg-green-600 text-white rounded">⬇ Download</button>
          <button onClick={copyToClipboard} className="px-3 py-1 bg-purple-600 text-white rounded">📋 Copy</button>
          <button onClick={shareLink} className="px-3 py-1 bg-teal-600 text-white rounded">🔗 Share</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="md:w-1/2 w-full overflow-auto bg-gray-900">{renderEditor()}</div>
        <div className="md:w-1/2 w-full border-t md:border-l md:border-t-0 relative">
          {running && <div className="absolute w-full text-center bg-black/40 text-white py-2 z-10">⏳ Running...</div>}
          {language === "web" ? (
            <iframe
              srcDoc={output}
              title="preview"
              sandbox="allow-scripts"
              className="w-full h-[85vh]"
            />
          ) : (
            <pre className="p-4 bg-black h-[85vh] overflow-auto text-green-300">{output}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;