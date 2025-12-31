FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
ENV KINDE_ISSUER_URL=https://dummy.kinde.com
ENV KINDE_CLIENT_ID=dummy-client-id
ENV KINDE_CLIENT_SECRET=dummy-secret
ENV MONGODB_URI=mongodb://dummy:dummy@localhost:27017/dummy

RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
EXPOSE 8080
CMD ["npx", "next", "start", "-p", "8080"]
