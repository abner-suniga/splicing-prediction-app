import { JobStatus } from "@/app/types/jobs";

export default function JobStatusChip({ status }: { status: JobStatus }) {
  let statusColor = "";
  let statusText = "";
  switch (status) {
    case JobStatus.SUCCESS:
      statusColor = "text-emerald-700 border-emerald-700 bg-emerald-100";
      statusText = "Finalizado com sucesso";
      break;
    case JobStatus.PROCESSING:
      statusColor = "text-orange-700 border-orange-700 bg-orange-100";
      statusText = "Processando";
      break;
    case JobStatus.FAIL:
      statusColor = "text-red-700 border-red-700 bg-red-100";
      statusText = "Finalizado com erro";
      break;
  }

  return (
    <span
      className={`w-fit h-fit text-xs font-mono font-semibold inline-flex items-center justify-center rounded-full px-2.5 py-0.5 border ${statusColor}`}
    >
      {statusText}
    </span>
  );
}
