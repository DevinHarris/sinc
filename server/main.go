package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {

	var PORT := os.G
	r := mux.NewRouter()

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello from new router! - This app is built with GO :)")
	})

	s := fmt.Sprintf("Running SINC using GO on PORT: %s", PORT)
	fmt.Println(s)

	http.ListenAndServe(PORT, r)

}
