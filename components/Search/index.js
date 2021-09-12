import {Container, SearchInput} from "./Search.styles";
import {useEffect, useState, useRef} from "react";

const Search = ({setSearchTerm}) => {
    const [value, setValue] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(value);
        }, 500);

        return () => clearTimeout(timer);
    }, [value]);

    return (
        <Container>
            <SearchInput value={value} onChange={e => setValue(e.target.value)}/>
        </Container>
    );
};

export default Search;