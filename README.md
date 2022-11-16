# SHL Supergraph

## Getting Started

### Installation

1. On linux debian based systems, run to install nodejs

```bash
sudo apt install nodejs
```

2. Clone the repository to your local environment

```bash
git clone https://github.com/esilverm/shl-graphql
```

**Note: when making changes, it is best to fork the repository and submit pull requests**

3. Navigate to the directory

```bash
cd shl-graphql
```

4. Install all libraries

```bash
npm ci
```

5. Get the .env.local file from one of the head developers and place it in the top level directory.

### Run The Development Server

1. SSH tunnel into the production server to get access to the database

```bash
# run the ssh tunnel in a detached process
ssh -N -L 3306:127.0.0.1:3306 <username>@<server> -p <port> &
```

2. Run the development server

```bash
npm start
```

Open [http://localhost:4000](http://localhost:4000) with your browser to use Apollo sandbox to query and develop this API.

## Architecture

This project is using typescript, apollo-server, and sequelize with a mariahdb database.

### Development workflow

TBD
