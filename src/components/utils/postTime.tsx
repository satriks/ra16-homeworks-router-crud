import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function postTime(time: number) {
  dayjs.extend(relativeTime);

  return dayjs(time).fromNow();
}
