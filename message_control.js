const generatorRamdom = (numMax) => {
    return Math.floor(Math.random() * (numMax - 0 + 1) + 0);
};

const itemGenr = () => {
    const arrItem = ['love', 'work', 'money', 'friends', 'family'];
    return arrItem[generatorRamdom((arrItem.length) - 1)];
};

const adjetiveGenr = () => {
    const adjetiveItem = ['dark', 'easy', 'funny', 'hungry', 'mysterious', 'prickly', 'stormy', 'stupid', 'zany'];
    return adjetiveItem[generatorRamdom((adjetiveItem.length) - 1)];
};



const actionGenr = () => {
    const actionItem = ['define', 'initiate', 'spur', 'mock', 'kick', 'stimulate', 'save', 'observe', 'synthesize', 'resign'];
    return actionItem[generatorRamdom((actionItem.length) - 1)];
};

const messageGenerator = () => {
    return `Your ${itemGenr()} is ${adjetiveGenr()} please ${actionGenr()} it!!!!! `;
};

console.log(messageGenerator())

