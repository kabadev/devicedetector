import { NextRequest, NextResponse } from "next/server";
import Device from "@/models/deviceModel";
import { connect } from "@/dbConfig/dbConfig";

export async function GET(request: NextRequest) {
  try {
    await connect();
    const devices = await Device.find();
    return NextResponse.json({
      mesaaage: "devices data",
      data: devices,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqBody = await request.json();
    const newDevice = new Device(reqBody);
    const savedDevice = await newDevice.save();

    return NextResponse.json({
      mesaaage: "Save devices data",
      data: savedDevice,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
