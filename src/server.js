const express = require( 'express' )
const app = express()

const port = process.env.PORT || 8080

function stopServer() {
  console.log( 'stopping server...' )
  server.close(function (err) {
    if( err ) {
      console.error( err )
      process.exit( 1 )
    }

    process.exit( 0 )
  })
}

process.on( 'SIGINT', stopServer )

process.on( 'SIGTERM', stopServer )

const server = app.listen(port, function() {
  console.log( `Listening on port: ${port}` )
})



app.use( require( './routes.js' ) )
