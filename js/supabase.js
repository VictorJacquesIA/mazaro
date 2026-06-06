import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export async function uploadImagem(file, produtoId) {
  const ext = file.name.split('.').pop()
  const filename = `produto-${produtoId}-${Date.now()}.${ext}`

  const { error } = await supabase.storage
    .from('mazaro-produtos')
    .upload(filename, file, { upsert: true })

  if (error) throw error

  const { data } = supabase.storage
    .from('mazaro-produtos')
    .getPublicUrl(filename)

  return data.publicUrl
}
