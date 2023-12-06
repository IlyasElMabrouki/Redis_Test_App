import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

// Get errors
client.on('error', (err) => console.log(err)); 

//Connect to db using singleton pattern
if (!client.isOpen){
    client.connect();
}

export {client}