// app/page.js

import FormCalcularConsumo from "../components/FormCalcularConsumo/FormCalcularConsumo"
import Layout from "../components/Layout/layout"
import TablaConsumo from "../components/TablaConsumo/TablaConsumo"


// This file maps to the index route (/)

//  paginas principal 
const page = () => {
  return (
    <Layout>
      <FormCalcularConsumo />
    </Layout>

  )
}

export default page
