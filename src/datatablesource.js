export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Usuário",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
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
    field: "age",
    headerName: "Idade",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "José Carlos",
    img: "https://media.licdn.com/dms/image/D4D03AQE_4G-wq_iEsg/profile-displayphoto-shrink_800_800/0/1717462626988?e=1723075200&v=beta&t=fAT8_diI9MVWgLs7QxYQbol3ztnQminU6AzZOzUq3ws",
    status: "ativo",
    email: "neto@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jhol",
    img: "https://media.licdn.com/dms/image/D4D03AQG5X0xRQpxqyQ/profile-displayphoto-shrink_800_800/0/1709940351498?e=1723075200&v=beta&t=n_2g230R4WuX1UTLIuFc-9KsCoFRW8Jh4A7uVHnVDAI",
    email: "jonatas@gmail.com",
    status: "passivo",
    age: 0,
  },
  {
    id: 3,
    username: "Paulo",
    img: "https://avatars.githubusercontent.com/u/107010534?v=4",
    email: "paulo@gmail.com",
    status: "pendente",
    age: 666,
  },
  {
    id: 4,
    username: "Master Chief",
    img: "https://store-images.s-microsoft.com/image/apps.13367.13817186670444302.148c432a-9fce-4c7d-bf13-8a2bd3a527b3.f26b74f0-8b1f-41eb-a82f-06843ec33473?q=90&w=177&h=265",
    email: "halo@hotmail.com",
    status: "ativo",
    age: 16,
  },
  {
    id: 5,
    username: "Rafael",
    img: "https://media.licdn.com/dms/image/D4D03AQHQ0Za9ck3pUA/profile-displayphoto-shrink_800_800/0/1712625532516?e=1723075200&v=beta&t=G7CovQAWtnWCK5iyFCEgg7aff7eXOb8wazIzIOSvYs4",
    email: "rafael@gmail.com",
    status: "passivo",
    age: 25,
  },
  {
    id: 6,
    username: "Amanda",
    img: "https://media.licdn.com/dms/image/D4D03AQF3eeravVJVWA/profile-displayphoto-shrink_800_800/0/1675177489104?e=1723075200&v=beta&t=DFd60lWFmqy8b9eW5in--NQlo4cHi8foWdBz-tyVT0c",
    email: "amanda@gmail.com",
    status: "ativo",
    age: 5,
  },
  {
    id: 7,
    username: "Elon Musk",
    img: "https://media.moneytimes.com.br/uploads/2024/06/elon-musk-xai-inteligencia-artificial.webp",
    email: "elon@gmail.com",
    status: "passivo",
    age: 52,
  },
  {
    id: 8,
    username: "MrBeast",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnNO03kSIqn5_4J-L1dD9Wdyfh7uICgEdDg&s",
    email: "mrbeast@gmail.com",
    status: "ativo",
    age: 26,
  },
  {
    id: 9,
    username: "Sheldon Cooper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVRgN6SkJGs-ar0hcJY4sUlkin1tF3ZmO5g&s",
    email: "sheldoncooper@gmail.com",
    status: "bazinga",
    age: 43,
  },
  {
    id: 10,
    username: "Mago Dave",
    img: "https://montink.s3.amazonaws.com/mockups/194247/Branco_1227322.png",
    email: "snow@gmail.com",
    status: "passivo",
    age: 36,
  },
  {
    id: 11,
    username: "Creeper",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Userbox_creeper.svg/2048px-Userbox_creeper.svg.png",
    email: "creeper@gmail.com",
    status: "ativo",
    age: 1,
  },
];
