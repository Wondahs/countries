import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
    console.log("Get some!")
    try {
        const filePath = path.join(process.cwd(), 'app/lib', 'data.json');
        const data = await readFile(filePath, 'utf8');
        const parsedData = JSON.parse(data);
        return NextResponse.json(parsedData, {status: 200});
    } catch (error) {
        return NextResponse.json({ error }, {status: 500});
    }
}
