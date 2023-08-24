import {useState} from "react";

const useLocalStorage = (key, defaultValue) => {
	
	const [localStorageValue, setLocalStorageValue] = useState(() => {
        const value = localStorage.getItem(key);
			
        if (value) {
            return JSON.parse(value);
        }
			
        else{
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    });

	const setLocalStorageStateValue = (newValue) => {
		localStorage.setItem(key, JSON.stringify(newValue));
		setLocalStorageValue(newValue);
	}

	return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;