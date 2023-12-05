"use client";

import Button from "../components/button";

export default function Wedding() {
  return (
    <div className="w-screen bg-slate-100 min-h-screen flex-1 flex flex-col justify-center p-10">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-1 p-6 flex-col">
        <Button className="w-fit self-end">Add Wedding</Button>
        <div className="h-2" />
        <table className="min-w-full rounded-xl">
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
