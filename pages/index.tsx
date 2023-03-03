// app/page.js

import FormCalcularConsumo from "../components/FormCalcularConsumo/FormCalcularConsumo"
import Layout from "../components/Layout/Layout"
import TablaConsumo from "../components/TablaConsumo/TablaConsumo"
// This file maps to the index route (/)
//  paginas principal 
const index = () => {
  return (
    <Layout>
      <FormCalcularConsumo />
    </Layout>

  )
}

export default index
