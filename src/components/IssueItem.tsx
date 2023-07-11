const IssueItem = (issue: IssueType) => {
  return (
    <div>
      <span>title : {issue.title}</span>
      <span>create : {issue.created_at}</span>
      <span>user : {issue.user}</span>
      <span>comments : {issue.comments}</span>
    </div>
  );
};
export default IssueItem;
