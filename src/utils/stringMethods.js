export const truncate = (input, length) => {
    if (input.length <= length) {
        return input;
    }
    return input.slice(0, length) + "...";
}