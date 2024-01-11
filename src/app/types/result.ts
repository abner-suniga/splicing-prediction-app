export type ResultHit = {
  name: string;
  type: "ACCEPTOR" | "DONOR";
  position: number;
  hit: string;
  score: number;
};

export type ResultSequence = {
  name: string;
  content: string;
};

export enum JobStatus {
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export type JobResults = {
  jobId: string;
  model: string;
  status: JobStatus;
  resultSequences: ResultSequence[];
  resultHits: ResultHit[];
};
