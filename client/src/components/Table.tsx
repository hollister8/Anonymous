import React, { useState } from "react";
import { PostListVo } from "../vo/postListVo";
import { AiOutlineEye } from "react-icons/ai";
import { RiChat1Line } from "react-icons/ri";

export default function MyTable({list} : any) {
    const lists : PostListVo[] = list
    console.log(lists)

    return (
        <table className="main-table">
            <colgroup>
                <col style={{width: '80%'}}/>
                <col style={{width: '10%'}}/>
                <col style={{width: '10%'}}/>
            </colgroup>
            <thead>
                <tr>
                    <th>글</th>
                    <th><AiOutlineEye /></th>
                    <th><RiChat1Line /></th>
                </tr>
            </thead>
            <tbody>
                {lists && lists.map((val) => (
                    <tr>
                        <td>{val.board_title}</td>
                        {/* <td>{val.board_content}</td>
                        <td>{val.user_id}</td>
                        <td>{val.board_regdate.toString()}</td> */}
                        <td><AiOutlineEye />0</td>
                        <td><RiChat1Line />0</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}