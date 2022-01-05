import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">Bui Huu Dat</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img className="topAvatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bba048c-c6d7-462f-8c8d-5d4c8e5adcc5/dex1kyh-b2a984f9-841c-4f80-9663-678b58b03023.jpg/v1/fill/w_1280,h_1793,q_75,strp/portrait_study_by_artofedph_dex1kyh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5MyIsInBhdGgiOiJcL2ZcLzNiYmEwNDhjLWM2ZDctNDYyZi04YzhkLTVkNGM4ZTVhZGNjNVwvZGV4MWt5aC1iMmE5ODRmOS04NDFjLTRmODAtOTY2My02NzhiNThiMDMwMjMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MHofpftYclXghYBmGafPd3rPpsk9l3CZiVb6FLfFpv8" alt="" />
        </div>
      </div>
    </div>
  )
}

