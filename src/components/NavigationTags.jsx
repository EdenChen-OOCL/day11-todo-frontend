import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';

export const NavigationTags = () => {
    const navigate = useNavigate();

    const onTabChange = (key) => {
        switch (key) {
            case "1":
                navigate('/todo-list');
                break;
            case "2":
                navigate('/done-list');
                break;
            case "3":
                navigate('/help');
                break;
            default:
                navigate('/todo-list');
        }
    };

    return (
        <Tabs
            items={[
                {label: "Todo List", key: "1"},
                {label: "Done List", key: "2"},
                {label: "Help", key: "3"},
            ]}
            onChange={onTabChange}
            centered={true}
            colorBorder={"black"}
        />
    );
}
