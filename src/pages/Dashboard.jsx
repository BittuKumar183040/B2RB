/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FileText, Plus, Clock, Download, Trash2, TrendingUp, CheckCircle, AlertCircle, Eye } from "lucide-react";

const resumes = [
  {
    id: 1,
    title: "Software Engineer — Google",
    template: "Minimal",
    lastEdited: "2 hours ago",
    atsScore: 94,
    status: "strong",
  },
  {
    id: 2,
    title: "Frontend Developer — Stripe",
    template: "Modern",
    lastEdited: "Yesterday",
    atsScore: 78,
    status: "good",
  },
  {
    id: 3,
    title: "Full Stack Developer — Startup",
    template: "Compact",
    lastEdited: "3 days ago",
    atsScore: 61,
    status: "weak",
  },
];

const stats = [
  { label: "Total Resumes", value: "3", Icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { label: "Avg. ATS Score", value: "78%", Icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { label: "Last Edited", value: "2h ago", Icon: Clock, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  { label: "Downloads", value: "5", Icon: Download, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
];

const getScoreMeta = (score) => {
  if (score >= 90) return { label: "Excellent", bar: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" };
  if (score >= 70) return { label: "Good", bar: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
  return { label: "Needs Work", bar: "bg-amber-400", text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (id) => {
    setDeletingId(id);
    setTimeout(() => setDeletingId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
                Dashboard
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Welcome back 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your resumes and track your ATS scores.
            </p>
          </div>
          <button
            onClick={() => navigate("/templates")}
            className="flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Plus size={16} strokeWidth={2.5} />
            New Resume
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map(({ label, value, Icon, color, bg, border }) => (
            <div
              key={label}
              className={`bg-white rounded-2xl border ${border} p-5 flex items-center gap-4 shadow-sm`}
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <div className="text-xl font-extrabold text-gray-900 tracking-tight">{value}</div>
                <div className="text-xs text-gray-400 font-medium">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">
            My Resumes
          </h2>
          <button
            onClick={() => navigate("/templates")}
            className="text-xs text-emerald-600 font-semibold hover:underline underline-offset-2"
          >
            Browse Templates →
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {resumes.map((resume) => {
            const score = getScoreMeta(resume.atsScore);
            const isDeleting = deletingId === resume.id;

            return (
              <div
                key={resume.id}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-300
                  ${isDeleting ? "opacity-40 scale-95" : "opacity-100"}`}
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <FileText size={18} className="text-emerald-600" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 text-sm truncate mb-0.5">
                    {resume.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {resume.lastEdited}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span>{resume.template} template</span>
                  </div>
                </div>

                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${score.bg} ${score.border} flex-shrink-0`}>
                  <div className="flex flex-col items-end">
                    <span className={`text-base font-extrabold ${score.text} leading-none`}>
                      {resume.atsScore}
                    </span>
                    <span className={`text-[9px] font-semibold ${score.text} tracking-wider uppercase`}>
                      ATS
                    </span>
                  </div>
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${score.bar} transition-all duration-500`}
                      style={{ width: `${resume.atsScore}%` }}
                    />
                  </div>
                  <span className={`text-[10px] font-semibold ${score.text} hidden sm:block`}>
                    {score.label}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => navigate(`/resume?id=${resume.id}`)}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:border-slate-400 hover:text-slate-800 transition-all duration-200"
                  >
                    <Eye size={13} /> Edit
                  </button>
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-600 border border-emerald-200 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-all duration-200"
                  >
                    <Download size={13} /> PDF
                  </button>
                  <button
                    onClick={() => handleDelete(resume.id)}
                    className="p-2 text-slate-300 hover:text-red-400 border border-transparent hover:border-red-100 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}

          {resumes.length === 0 && (
            <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                <FileText size={20} className="text-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-slate-500 mb-1">No resumes yet</h3>
              <p className="text-xs text-slate-400 mb-5">Create your first ATS-optimized resume in minutes.</p>
              <button
                onClick={() => navigate("/resume")}
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-200 transition-all duration-200"
              >
                <Plus size={14} /> Create Resume
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
            <AlertCircle size={18} className="text-emerald-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-800 mb-0.5">
              Boost your ATS score
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Add measurable impact metrics to your experience bullets. Resumes with numbers score{" "}
              <span className="font-semibold text-emerald-600">23% higher</span> on ATS systems.
            </p>
          </div>
          <button
            onClick={() => navigate("/resume")}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-emerald-600 border border-emerald-300 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            <CheckCircle size={13} /> Improve Now
          </button>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;