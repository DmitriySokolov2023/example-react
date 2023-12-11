import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder={'Поиск по содержанию поста'}
                onChange={e => setFilter({...filter, query:e.target.value})}
            />
            <MySelect
                value={filter.sort}
                defaultValue='Выберите сортировку'
                option={[
                    {value:'title', name:'По названию'},
                    {value:'body', name:'По описанию'},
                ]}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default PostFilter;