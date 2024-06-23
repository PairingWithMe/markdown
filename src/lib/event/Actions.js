import { Dispatcher } from "@aux4/dispatcher.js";
import { SELECT_CODE_LINES, UNSELECT_CODE_LINES } from "./Events";

export function selectCodeLines(start, end) {
  Dispatcher.dispatch(SELECT_CODE_LINES, { start, end });
}

export function unselectCodeLines() {
  Dispatcher.dispatch(UNSELECT_CODE_LINES);
}
