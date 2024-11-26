import {onRequest} from "firebase-functions/v2/https";

exports.helloworldworld = onRequest({cors: true}, (req: any, res: any) => {
  res.send("Hello, World!");
});
