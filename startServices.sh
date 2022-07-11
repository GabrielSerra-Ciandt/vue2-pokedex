#!/bin/bash

#inicia os serviços Quarkus(Backend) - Axios(BFF) - vue-cli-service(Frontend)

#inicia serviçp Quarkus(backend)
gnome-terminal -- ./startBackend.sh

#inicia serviço Axios(BFF)
gnome-terminal -- ./startBff.sh

#inicia serviço(frontend)
sleep 10
gnome-terminal -- ./startFrontend.sh