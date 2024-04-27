import { Item } from "@/types/Item";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    };
}

type EditAction = {
    type: 'edit';
    payload: {
        id: number;
        text: string;
    };
}

type ToggleEditAction = {
    type: 'toggleEdit';
    payload: {
        id: number;
    };
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    };
}

let num = 0;

// Tipos para add, edit, toggleEdit e remove.
type ListAction = AddAction | EditAction | RemoveAction | ToggleEditAction;

export const listReducer = (list: Item[], action: ListAction) => {
    switch(action.type) {
        case 'add':
            return [
                ...list,
                {
                    id: num++,
                    text: action.payload.text,
                    done: false
                }
            ];
        case 'edit':
            return list.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.text
                    };
                }
                return item;
            });
        case 'toggleEdit':
            return list.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        done: !item.done
                    };
                }
                return item;
            });
        case 'remove':
            return list.filter(item => item.id !== action.payload.id);
        default:
            return list;
    }
}
