import React, { useState } from 'react';
import Sidebar from '../SideBar/SideBar';
import Headbar from '../Headbar/Headbar';
import './EntryPage.css';
import '../../App.css';
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Thai from './Thai';
import Mexican from './Mexican';
import American from './American';
import Chinese from './Chinese';

function EntryPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className ="body">
            <Headbar setMenuOpen={setIsOpen} menuOpen={isOpen} />
      <Sidebar isOpen={isOpen} />
            <div className = "EntryPage">
            <div className="search-bar">
                <div className="where">
                    Where do you want to eat?
                    </div>
                    <TextField placeholder="Search" variant="outlined" fullWidth />
                    </div>
                    <Fab className="sButton" type="submit" aria-label="submit" style={{ backgroundColor: '#EE3E38' }}>
            <ArrowForwardIosIcon style={{ color: '#FFFFFF' }}/>
            </Fab>
            <div className="logo">
            <div className = "invisible2">
                        H
                    </div>
            </div>
            <div className="popular">
                    Popular Categories
                    </div>
                    <div className="pLocation1">
                        <Thai></Thai>
                    </div>
                    <div className="pLocation2">
                        <Mexican></Mexican>
                    </div>
                    <div className="pLocation3">
                        <American></American>
                    </div>
                    <div className="pLocation3">
                        <American></American>
                    </div>
                    <div className="pLocation4">
                        <Chinese></Chinese>
                    </div>
                    <div className = "invisible">
                        Hello
                    </div>
            </div>
        </div>
    );
}

export default EntryPage;