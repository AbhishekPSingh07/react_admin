export const userColumn =[
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell__withImage">
          <img className="cell__image" src={params.row.img} alt="avatar" />
          {params.row.Username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "conutry",
    headerName: "Country",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell:(params)=>{
      return(
        <div className={`cell_withStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  },
    
];



 