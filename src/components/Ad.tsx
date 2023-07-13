import { Link } from "react-router-dom";

import { Issue } from "@/service/issues";
import IssueItem from "./IssueItem";

type Props = {
  issue: Issue
}

export default function Ad({issue}: Props) {
  return (
    <>
      <Link to="https://www.wanted.co.kr/" target="_blank">
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=800&q=100" alt="ad" />
      </Link>
      <IssueItem issue={issue} />
    </>
  )
}
