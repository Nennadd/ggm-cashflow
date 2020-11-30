const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const { getConnection } = require("./db");

const getAll = async () => {
  const pool = await getConnection();
  const request = await pool.request();
  return await request.query(`SELECT OITM.ItemCode, OITM.ItemName, OCRD.CardName as Supplier, RDR1.Price, 
      count(RDR1.ItemCode) as ArticleInOrders, OITM.onHand, 
      
      (SELECT sum(RDR1.Price) FROM RDR1 
      JOIN OITM on OITM.ItemCode = RDR1.ItemCode 
      JOIN OCRD on OITM.CardCode = OCRD.CardCode 
      WHERE OCRD.CardType = 'S') as TotalPrice, 
            
      (SELECT count(RDR1.ItemCode) FROM RDR1 JOIN OITM on OITM.ItemCode = RDR1.ItemCode 
      JOIN OCRD on OITM.CardCode = OCRD.CardCode 
      WHERE OCRD.CardType = 'S' ) as SumOfArticles,
      
      (SELECT (cast(count(RDR1.ItemCode) as float) / cast(count(DISTINCT RDR1.ItemCode) as float)) FROM RDR1 
      JOIN OITM on OITM.ItemCode = RDR1.ItemCode 
      JOIN OCRD on OITM.CardCode = OCRD.CardCode 
      WHERE OCRD.CardType = 'S' ) as AvgArticleByOrder
            
      FROM OITM JOIN RDR1 on OITM.ItemCode = RDR1.ItemCode 
      JOIN OCRD on OITM.CardCode = OCRD.CardCode 
      WHERE OCRD.CardType = 'S'
      GROUP BY OITM.ItemCode, OITM.ItemName, OCRD.CardName, RDR1.Price, OITM.onHand`);
};

getAll().then((response) => console.log(response));

const server = http.createServer(app);

const wss = new WebSocket.Server({ server: server });

wss.on("connection", (ws) => {
  console.log("Client Connected !");
  ws.send("Hello from the server !");

  ws.on("message", (msg) => console.log(JSON.parse(msg)));
});

server.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
