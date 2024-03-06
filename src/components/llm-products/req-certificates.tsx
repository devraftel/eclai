"use client";

export function RequiredCertificatesUI(ecoCertifications: AllRequiredCertificatesProps) {

  return (
    <div className="p-4 text-green-400 border rounded-xl bg-zinc-950">
      <div className="text-2xl pb-2 font-semibold text-white text-balance">Required ECO Certifications</div>
      {
        ecoCertifications.certifications.map((certification, index) => {
          return (
            <div key={index}>
              <div className="text-xl font-semibold "> {index + 1} {certification.certification_name}</div>
              <div className="text-md text-zinc-300"> {certification.reason}</div>
              {/* A LINE */}
              <div className="w-full border border-slate-100 opacity-30 py-0.5 my-1" />
            </div>
          )
        })
      }
    </div>
  );
}
