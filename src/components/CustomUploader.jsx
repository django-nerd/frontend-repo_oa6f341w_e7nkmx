import { useState } from "react";
import { Upload, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function CustomUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
    setSubmitted(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!file) return;
    // In a real app we'd send to backend. Here we just mimic success.
    setTimeout(() => setSubmitted(true), 600);
  }

  return (
    <section id="custom" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-fuchsia-50 via-white to-indigo-50 p-8 border border-zinc-200">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900">Upload your custom design</h3>
              <p className="mt-3 text-zinc-600">
                Make it yours. Drop your artwork, logo, or anime-inspired mashup and we'll print it on premium tees.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600 list-disc list-inside">
                <li>PNG/SVG preferred • 3000px+ • Transparent background</li>
                <li>Max size 10MB • RGB</li>
                <li>We review every design for print quality</li>
              </ul>
            </div>
            <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 shadow border border-zinc-100">
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-zinc-300 hover:border-fuchsia-500 transition rounded-xl cursor-pointer">
                {preview ? (
                  <img src={preview} alt="preview" className="h-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-zinc-600">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-sm">Drag & drop or click to upload</span>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={onFile} className="hidden" />
              </label>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-zinc-500 truncate max-w-[60%]">{file ? file.name : "No file selected"}</div>
                <button disabled={!file} className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-semibold disabled:opacity-50">
                  <Upload className="h-4 w-4" /> Submit
                </button>
              </div>
              {submitted && (
                <div className="mt-4 inline-flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle2 className="h-4 w-4" /> Uploaded! We'll get back with a proof shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
