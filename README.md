# Orb 
Web GUI for MSaaS : **O**n the **R**eliable web dash**B**oard

## Getting Started 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisites
Check version
```bash
$ bun -v
1.1.45
$ node -v
v22.13.0
```

### Local development
Run the development server:
```bash
bun install
bun dev
```

### Deploy by using Docker

```bash
docker build -t orb .
docker run -d -p 3000:3000 orb
```