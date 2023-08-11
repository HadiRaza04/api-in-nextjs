import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'products.json');

export const getAll =  () => {
   const data =  fs.readFileSync(filePath);
   return JSON.parse(data);
}

export const getById = (id) => {
    const data = getAll();
    data.find(p => p.id == Number(id));
}