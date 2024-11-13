import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/RequestModal";
export async function POST(req) {
  await connectDB();
  try {
    const obj = await req.json();

    const isUserRequestedBefore = await RequestModal.findOne({
      user: obj.user,
    });
    console.log("isUserRequestedBefore=>", isUserRequestedBefore);
    if (isUserRequestedBefore) {
      return Response.json(
        {
          error: true,
          msg: "You had already applied as a doctor",
        },
        { status: 403 }
      );
    }

    let newRequest = await new RequestModal({ ...obj });
    newRequest = await newRequest.save();

    return Response.json(
      {
        error: false,
        msg: "Request Registered Successfully",
        request: newRequest,
      },
      { status: 201 }
    );
  } catch (e) {
    return Response.json(
      {
        error: true,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  const requests = await RequestModal.find().populate("user");
  return Response.json(
    {
      error: false,
      msg: "Requests fetched Successfully",
      requests,
    },
    { status: 200 }
  );
}

export async function PUT(req) {
  await connectDB();
  try {
    const obj = await req.json();
    let { id, status } = obj;
    const updated = await RequestModal.findOneAndUpdate(
      {
        _id: id,
      },
      { status: status }
    ).exec();

    return Response.json(
      {
        error: false,
        msg: "Requests updated Successfully",
        request: updated,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        error: false,
        msg: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {}