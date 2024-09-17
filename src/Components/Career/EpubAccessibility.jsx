import data from "../../Content/Career/Careers.json";
import JobDescripiton from "../Common/JobDescripiton";
import JoinTeam from "../Common/JoinTeam";
export default function EpubAccessibility() {
  return (
    <>
      <JobDescripiton
        title={data.epub.title}
        subheading={data.epub.subheading}
        data={data.epub.list}
      />
      <JoinTeam name="Want to Join Our Team?" />
    </>
  );
}
