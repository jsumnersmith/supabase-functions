import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)
const handler = async (req, res) => {
  const { data, error } = await supabase
    .from('submissions')
    .select('*');
  
  if (error) {
    return res.status(500).json(error);
  }

  return res.status(200).json(data);
}

export default handler;