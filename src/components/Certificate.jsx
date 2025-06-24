import React, { useRef, useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Certificate = ({ completedCount, totalVideos, courseTitle }) => {
  const certRef = useRef();
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("Learner");
  const [manuallyHidden, setManuallyHidden] = useState(false);
  const [certificateID, setCertificateID] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setUserName(user.name);

    const isHidden = localStorage.getItem("certificate-hidden") === "true";
    setManuallyHidden(isHidden);

    if (completedCount === totalVideos && !isHidden) {
      setShow(true);
    }

    const storedID = localStorage.getItem("certificate-id");
    if (storedID) {
      setCertificateID(storedID);
    } else {
      const newID = `CERT-${Date.now().toString().slice(-6)}`;
      localStorage.setItem("certificate-id", newID);
      setCertificateID(newID);
    }
  }, [completedCount, totalVideos]);

 const downloadPDF = async () => {
  const element = certRef.current;
  if (!element) return toast.error("❌ Certificate not found");

  try {
    await new Promise((res) => setTimeout(res, 300));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      allowTaint: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${userName}-certificate.pdf`);
    toast.success("✅ PDF downloaded successfully!");
  } catch (error) {
    console.error("PDF download error:", error);
    toast.error("❌ Download failed. Check image or CORS.");
  }
};

const handlePrint = () => {
  const certificate = certRef.current;
  if (!certificate) {
    toast.error("❌ Certificate reference not found.");
    return;
  }

  const printWindow = window.open("", "_blank", "width=1200,height=800");
  if (!printWindow) {
    toast.error("❌ Unable to open print window. Please enable popups.");
    return;
  }

  // Copy all styles from head
  const headStyles = document.head.innerHTML;

  // Clone certificate container
  const clone = certificate.cloneNode(true);

  // Inline the background color for print
  clone.style.backgroundColor = getComputedStyle(certificate).backgroundColor;

  // Add explicit border and styles inline
  clone.style.boxShadow = getComputedStyle(certificate).boxShadow;
  clone.style.borderRadius = getComputedStyle(certificate).borderRadius;

  // Wrapper div
  const wrapper = document.createElement("div");
  wrapper.className = "print-area";
  wrapper.style.width = "100%";
  wrapper.style.height = "100%";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "center";
  wrapper.style.alignItems = "center";
  wrapper.appendChild(clone);

  // Write into print window
  printWindow.document.write(`
    <html>
      <head>
        ${headStyles}
        <style>
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            background: white !important;
          }
          .print-area {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        ${wrapper.outerHTML}
      </body>
    </html>
  `);

  printWindow.document.close();

  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }, 700);
  };
};



  const shareOnLinkedIn = () => {
    const shareText = `Proud to complete "${courseTitle}" by NextEra Coders. 🎓 Certified for completing all modules! #NextEraCoders`;
    const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}&mini=true&title=Certificate&summary=${encodeURIComponent(shareText)}`;
    window.open(linkedInURL, "_blank");
  };

  const handleHide = () => {
    setShow(false);
    setManuallyHidden(true);
    localStorage.setItem("certificate-hidden", "true");
  };

  const handleShow = () => {
    setShow(true);
    setManuallyHidden(false);
    localStorage.removeItem("certificate-hidden");
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />

      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          .certificate-print-area, .certificate-print-area * {
            visibility: visible !important;
            height: auto !important;
            overflow: visible !important;
          }
          .certificate-print-area {
            position: absolute !important;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            margin: 0;
            box-shadow: none !important;
            border: none !important;
          }
        }

        .fade-in {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .balloon {
          position: fixed;
          bottom: -100px;
          width: 30px;
          height: 40px;
          border-radius: 50%;
          opacity: 0.7;
          animation: floatUp 6s linear infinite;
          z-index: 40;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>

      {show && (
        <div className="relative fade-in mt-10 text-center px-4">
          <h3 className="text-2xl font-bold text-green-600 mb-6 fade-in">
            🏆 Congratulations! Your Certificate is Ready
          </h3>

          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="balloon"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}

          <div className="w-full min-h-screen flex justify-center items-center bg-white px-2 sm:px-4 py-6 overflow-auto">
            <div
              ref={certRef}
              className="certificate-print-area relative w-full max-w-[98%] sm:max-w-4xl lg:max-w-5xl bg-[#fdfbe9] overflow-hidden font-serif shadow-2xl rounded-lg aspect-[16/9] sm:aspect-[16/9] max-[400px]:aspect-auto print:aspect-auto print:rounded-none print:shadow-none fade-in"
            >
              
    {/* 🔷 Decorative Corners */}
    <div className="absolute top-0 left-0 w-12 sm:w-20 md:w-24 lg:w-28 h-12 sm:h-20 md:h-24 lg:h-28 bg-[#0d294d] rotate-45 origin-top-left" />
    <div className="absolute bottom-0 right-0 w-12 sm:w-20 md:w-24 lg:w-28 h-12 sm:h-20 md:h-24 lg:h-28 bg-[#0d294d] rotate-45 origin-bottom-right" />

    {/* 🔶 Accent Lines */}
    <div className="absolute top-0 right-0 w-1/4 h-[4px] sm:h-[6px] bg-yellow-500 rounded-bl-md" />
    <div className="absolute bottom-0 left-0 w-1/4 h-[4px] sm:h-[6px] bg-yellow-500 rounded-tr-md" />

    {/* 🌟 Certificate Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-2 sm:px-4 md:px-6 lg:px-10 py-6 sm:py-8 md:py-10">
      {/* Title */}
      <h1 className="pd-2 text-lg max-[400px]:text-base sm:text-2xl md:text-4xl font-extrabold text-[#0d294d] tracking-widest uppercase">
        Certificate
      </h1>
      <p className="text-[9px] max-[400px]:text-[7px] sm:text-xs md:text-sm text-[#0d294d] tracking-[0.2em] uppercase font-medium mb-2">
        of Completion
      </p>

      {/* Presented To */}
      <p className="text-[9px] max-[400px]:text-[6px] sm:text-xs font-semibold text-gray-700 mt-2">
        This certificate is presented to
      </p>
      <h2 className="text-lg max-[400px]:text-sm sm:text-2xl md:text-3xl font-bold text-yellow-700 italic my-2 break-words px-2">
        {userName}
      </h2>

      {/* From */}
      <p className="text-[10px] max-[400px]:text-[7px] sm:text-sm font-semibold italic text-[#0d294d]">
        from NextEra Coders
      </p>

      {/* Subtext */}
      <p className="text-[9px] max-[400px]:text-[7px] sm:text-xs md:text-sm text-gray-700 mt-2 max-w-xl px-1">
        In recognition of their hard work and successful completion of the course:
      </p>
      <p className="text-sm max-[400px]:text-xs sm:text-lg font-semibold text-[#0d294d] mt-1 break-words px-2">
        {courseTitle}
      </p>

      {/* Footer Section */}
      <div className="w-full px-2 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between text-[9px] max-[400px]:text-[6px] sm:text-sm text-[#0d294d] font-medium mt-6 gap-3 sm:gap-0">
        <div>
          <p>CERTIFICATE ID: {certificateID}</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xs sm:text-sm">Sandip Kumar Verma</p>
          <p className="text-[9px] sm:text-xs">Founder, NextEra Coders</p>
        </div>
      </div>
    </div>
  
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 mb-6 fade-in">
            <button
              onClick={downloadPDF}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              📄 Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              🖨️ Print
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="bg-[#0A66C2] text-white px-4 py-2 rounded hover:bg-[#084a8c] transition"
            >
              🔗 Share on LinkedIn
            </button>
            <button
              onClick={handleHide}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              🙈 Hide Certificate
            </button>
          </div>
        </div>
      )}

      {!show && manuallyHidden && (
        <button
          onClick={handleShow}
          className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        >
          🎓 Show Certificate
        </button>
      )}
    </>
  );
};

export default Certificate;


























