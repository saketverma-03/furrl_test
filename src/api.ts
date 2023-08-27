import axios from "axios";

export const getData = async (page: number = 1) => {
  const params = {
    method: "post",
    url: `https://api.furrl.in/api/v1/vibe/getVibeRelate?visitId=&page=${page}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      vibe: "#NightFlea",
    },
  };

  const res: any = await axios(params);
  // console.log(res.data.productData);
  return res.data.productData;
};
