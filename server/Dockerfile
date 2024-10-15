FROM rustlang/rust:nightly-alpine as builder

#Install libc equivalent
RUN apk add --no-cache musl-dev
RUN apk add --no-cache pkgconfig
RUN apk add --no-cache libressl-dev

# Make an /app dir, which everything will eventually live in
RUN mkdir -p /app
WORKDIR /app
COPY . .
WORKDIR /app/server

# Build the app
RUN cargo build --release

FROM alpine AS runner
# Copy the server binary to the /app directory
COPY --from=builder /app/server/target/release/backend_cqi /app/

WORKDIR /app
# Set any required env variables and
EXPOSE 3000
# Run the server
CMD ["/app/aep-schedule-website"]
