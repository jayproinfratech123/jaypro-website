import { FileText, Download } from "lucide-react";

const placeholderDocs = [
  { name: "Land Agreement.pdf", type: "Agreement" },
  { name: "Quotation_v2.pdf", type: "Quotation" },
  { name: "Blueprint_FloorPlan.dwg", type: "Blueprint" },
];

const Documents = () => (
  <div>
    <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Documents</h1>
    <div className="divide-y divide-black/5 rounded-sm border border-black/5 bg-white">
      {placeholderDocs.map((doc) => (
        <div key={doc.name} className="flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-amber-500" />
            <div>
              <p className="text-sm font-medium text-blueprint-900">{doc.name}</p>
              <p className="text-xs text-charcoal/50">{doc.type}</p>
            </div>
          </div>
          <button className="text-charcoal/50 hover:text-amber-600"><Download className="h-4 w-4" /></button>
        </div>
      ))}
    </div>
  </div>
);

export default Documents;
