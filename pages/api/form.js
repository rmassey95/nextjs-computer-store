import dbConnect from "../../lib/dbConnect";
import Review from "../../models/review";

export default async function handler(req, res) {
  await dbConnect();
  // Get data submitted in request's body.
  const body = req.body;

  const review = new Review({
    title: body.title,
    comment: body.comment,
    user: body.user,
    rating: parseInt(body.rating),
    datePosted: new Date(),
    item: body.itemId,
  });

  review.save((err) => {
    if (err) {
      res.send("ERROR");
    } else {
      res.redirect(`/item/${body.itemId}`);
    }
  });
}
