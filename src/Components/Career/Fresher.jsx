import JobDescripiton from "../Common/JobDescripiton";
import JoinTeam from "../Common/JoinTeam";
import data from "../../Content/Career/Careers.json";
export default function Fresher() {
  return (
    <>
      <JobDescripiton
        title={data.fresher.title}
        subheading={data.fresher.subheading}
        data={data.fresher.list}
      />
      <JoinTeam name="Want to Join Our Team?" />
    </>
  );
}
