import {TSID} from "tsid-ts";

export function b() {
  console.log(`module b/ TSID library: ${TSID.create().toString()}`);
}
