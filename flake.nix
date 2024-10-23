{
  description = "NPM Template";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, ... }@inputs: inputs.utils.lib.eachSystem [
    "x86_64-linux"
  ]
    (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      in
      {
        devShells.default = pkgs.mkShell rec {
          name = "bun-project";
          buildInputs = with pkgs ; [
            pkg-config
            openssl.dev
            openssl
            postgresql_16
            pgadmin4
          ];
          packages = with pkgs; [
            bun
          ];
          POSTGRES_USER="postgres";
          POSTGRES_PASSWORD="password";
          POSTGRES_NAME="dev";
          POSTGRES_PORT="5432";
          POSTGRES_HOST="localhost";
          DATABASE_URL="postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_NAME}";

          TS_RS_EXPORT_DIR = "../client/src/binding";
          LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [ pkgs.openssl ];
        };
      });
}
