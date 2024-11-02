import styled from "@emotion/styled";

const Table = styled.table`
  margin-top: -4px;
  border: solid 1px #666;
  border-collapse: collapse;
  & tr {
    line-height: 43px;
    border-bottom: solid 1px #666;
  }
  & thead th {
    background-color: #2d2d2d !important;
    color: #fff;
  }
  & thead th,
  & tbody td {
    padding: 0 5px;
    border-left: solid 1px #666;
  }
`;

export default function MarkdownTable(props) {
  return <Table width="100%" {...props} />;
}
