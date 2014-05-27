class Grains
  GRAINS = (1..64).each_with_object({}){|n,o| o[n] = 1 << (n - 1) }

  def square(id)
    GRAINS[id]
  end
  def total
    GRAINS.values.reduce(:+)
  end
end