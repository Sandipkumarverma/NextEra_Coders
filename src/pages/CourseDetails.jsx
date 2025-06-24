
// ✅ React + Tailwind + Lucide + Features: Bookmarks, Comments, Notes, Playlist, Progress, Quiz, Certificate

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { coursePlaylists } from "../data/playlists";
import { courses } from "../data/courses";
import Certificate from "../components/Certificate";
import {
  PlayCircle,
  Eye,
  ArrowLeft,
  LayoutList,
  BookOpen,
  Star,
  BadgeCheck,
  ClipboardList
} from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursePlaylists[id];
  const [selectedVideo, setSelectedVideo] = useState(course.videos[0]);
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem(`watched-${id}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem(`bookmarks-${id}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(`comments-${selectedVideo.id}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [note, setNote] = useState(() => {
    return localStorage.getItem(`note-${selectedVideo.id}`) || "";
  });
  const [quizOpen, setQuizOpen] = useState(false); // 🧪 Mini quiz toggle
  const [showMore, setShowMore] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(true);

  useEffect(() => {
    localStorage.setItem(`watched-${id}`, JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem(`bookmarks-${id}`, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem(`comments-${selectedVideo.id}`, JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem(`note-${selectedVideo.id}`, note);
  }, [note]);

  useEffect(() => {
    setComments(() => {
      const saved = localStorage.getItem(`comments-${selectedVideo.id}`);
      return saved ? JSON.parse(saved) : [];
    });
    setNote(localStorage.getItem(`note-${selectedVideo.id}`) || "");
    setQuizOpen(false); // close quiz when video changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedVideo]);

  const markAsWatched = () => {
    if (!completed.includes(selectedVideo.id)) {
      setCompleted([...completed, selectedVideo.id]);
    }
  };

  const toggleBookmark = () => {
    if (bookmarks.includes(selectedVideo.id)) {
      setBookmarks(bookmarks.filter((v) => v !== selectedVideo.id));
    } else {
      setBookmarks([...bookmarks, selectedVideo.id]);
    }
  };

  const addComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value.trim();
    if (commentText) {
      setComments([...comments, { text: commentText, date: new Date().toLocaleString() }]);
      e.target.reset();
    }
  };

  const visibleCourses = showMore ? courses : courses.slice(0, 3);
  const totalVideos = course.videos.length;
  const completedCount = completed.length;
  const progressPercent = Math.floor((completedCount / totalVideos) * 100);
  const allCompleted = completedCount === totalVideos;

  return (
    <div className="container mx-auto px-4 pt-8 pb-20">
      {/* 🏆 Certificate UI */}

      <Certificate completedCount={completedCount} totalVideos={totalVideos} courseTitle={course.title} />

     <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 text-sm p-3 rounded mb-4">
        📢 You can download certificate after completing the course.
      </div>

      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
        <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
          <BookOpen size={28} /> {course.title}
        </h2>
        <p className="text-gray-700 text-sm max-w-xl">{course.description}</p>
      </div>

      <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition duration-200 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Courses
        </Link>

        <div className="w-full md:w-auto">
          <div className="bg-blue-100 h-3 rounded-full w-full overflow-hidden">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-600 mt-1 text-center">
            📊 {completedCount} / {totalVideos} videos completed
          </p>
        </div>
      </div>

      {/* 📺 Video & Playlist */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="md:col-span-2">
          <div className="aspect-video rounded-lg overflow-hidden shadow-md border border-blue-300 mb-4">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.title}
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h3 className="text-xl font-semibold text-blue-800 border-l-4 border-blue-500 pl-3 flex items-center gap-2">
              <PlayCircle size={20} /> {selectedVideo.title}
            </h3>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={markAsWatched}
                className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                ✅ Mark as Completed
              </button>
              <button
                onClick={toggleBookmark}
                className="px-3 py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
              >
                {bookmarks.includes(selectedVideo.id) ? "⭐ Bookmarked" : "☆ Bookmark"}
              </button>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-blue-700 mb-1">📝 Your Notes</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-3 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Write your thoughts or summary here..."
            />
          </div>

          {/* Comments Section */}
          <div className="mb-10">
            <h4 className="text-md font-bold text-blue-700 mb-2">💬 Comments</h4>
            <form onSubmit={addComment} className="mb-3 flex gap-2 flex-wrap">
              <input
                type="text"
                name="comment"
                placeholder="Write a comment..."
                className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button type="submit" className="bg-blue-600 text-white px-3 rounded hover:bg-blue-700">Post</button>
            </form>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {comments.map((c, i) => (
                <div key={i} className="bg-gray-100 p-2 rounded text-sm border">
                  <p className="text-gray-800">{c.text}</p>
                  <span className="text-gray-500 text-xs">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="relative">
          {showPlaylist ? (
            <div className="bg-white p-4 rounded-lg shadow-lg border sticky top-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-bold text-blue-600 flex items-center gap-1">
                  <LayoutList size={18} /> Playlist
                </h4>
                <button
                  onClick={() => setShowPlaylist(false)}
                  className="text-sm text-red-500 hover:underline"
                >
                  ❌ Hide
                </button>
              </div>
              <div className="max-h-[70vh] overflow-y-auto pr-1 space-y-3 custom-scroll">
                {course.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`p-3 rounded-md cursor-pointer border flex justify-between items-center group transition-all duration-200 ${
                      selectedVideo.id === video.id
                        ? "bg-blue-100 border-blue-500 shadow-sm"
                        : "bg-white border-gray-200 hover:bg-blue-50"
                    }`}
                  >
                    <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 flex-1">
                      {selectedVideo.id === video.id && "🎥 "}
                      {video.title}
                    </p>
                    <div className="flex items-center gap-2">
                      {bookmarks.includes(video.id) && <Star size={14} className="text-yellow-500" />}
                      {completed.includes(video.id) && (
                        <span className="text-green-600 text-xs font-semibold">
                          <Eye size={14} className="inline-block mr-1" /> Watched
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="sticky top-4">
              <button
                onClick={() => setShowPlaylist(true)}
                className="w-full bg-blue-600 text-white text-sm py-2 rounded shadow hover:bg-blue-700 transition"
              >
                📂 Show Playlist
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-6 animate-fade-in">📚 Recommended Courses</h3>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 transition-all duration-500 ease-in-out ${
            showMore ? "max-h-[2000px]" : "max-h-[900px] overflow-hidden"
          }`}
        >
          {visibleCourses.map((rec) => (
            <div
              key={rec.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-xl transition duration-300 group"
            >
              <img
                src={rec.thumbnail}
                alt={rec.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-800">{rec.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                <Link
                  to={`/course/${rec.id}`}
                  className="inline-block mt-3 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                >
                  View Course →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
        >
          {showMore ? "🔽 View Less" : "🔼 View More"}
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
























